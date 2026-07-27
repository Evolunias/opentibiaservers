import NewSeasonMadnessaliveWikiKeywordPage, { generateMetadata } from './new-season-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMadnessaliveWikiKeywordPage />;
}
