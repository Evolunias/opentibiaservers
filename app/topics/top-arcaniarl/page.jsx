import TopArcaniarlKeywordPage, { generateMetadata } from './top-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlKeywordPage />;
}
