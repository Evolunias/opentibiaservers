import NewSeasonImperianicWikiKeywordPage, { generateMetadata } from './new-season-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicWikiKeywordPage />;
}
