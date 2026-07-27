import NewSeasonMediviaWikiKeywordPage, { generateMetadata } from './new-season-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaWikiKeywordPage />;
}
