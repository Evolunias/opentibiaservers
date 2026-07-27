import NewSeasonMadnessaliveKeywordPage, { generateMetadata } from './new-season-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMadnessaliveKeywordPage />;
}
