import NewSeasonTibijkaWikiKeywordPage, { generateMetadata } from './new-season-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaWikiKeywordPage />;
}
