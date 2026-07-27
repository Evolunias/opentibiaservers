import TopArcaniarlClientKeywordPage, { generateMetadata } from './top-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlClientKeywordPage />;
}
