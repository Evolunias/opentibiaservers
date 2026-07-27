import NewSeasonBlazeraWikiKeywordPage, { generateMetadata } from './new-season-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraWikiKeywordPage />;
}
