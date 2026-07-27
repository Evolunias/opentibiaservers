import TopArcaniarlWikiKeywordPage, { generateMetadata } from './top-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlWikiKeywordPage />;
}
