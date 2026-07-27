import NewSeasonMadnessaliveServerKeywordPage, { generateMetadata } from './new-season-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMadnessaliveServerKeywordPage />;
}
