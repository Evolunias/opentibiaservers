import TopArcaniarlOfficialKeywordPage, { generateMetadata } from './top-arcaniarl-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlOfficialKeywordPage />;
}
