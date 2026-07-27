import NewSeasonArcaniarlWikiKeywordPage, { generateMetadata } from './new-season-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlWikiKeywordPage />;
}
