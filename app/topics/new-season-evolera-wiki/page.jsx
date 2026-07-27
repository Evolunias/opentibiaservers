import NewSeasonEvoleraWikiKeywordPage, { generateMetadata } from './new-season-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraWikiKeywordPage />;
}
