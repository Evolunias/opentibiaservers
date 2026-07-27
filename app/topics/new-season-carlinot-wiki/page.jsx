import NewSeasonCarlinotWikiKeywordPage, { generateMetadata } from './new-season-carlinot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotWikiKeywordPage />;
}
