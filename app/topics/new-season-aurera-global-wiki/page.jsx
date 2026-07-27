import NewSeasonAureraGlobalWikiKeywordPage, { generateMetadata } from './new-season-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAureraGlobalWikiKeywordPage />;
}
