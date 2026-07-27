import NewSeasonTibiaraWikiKeywordPage, { generateMetadata } from './new-season-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraWikiKeywordPage />;
}
