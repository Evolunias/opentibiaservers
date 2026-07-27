import NewSeasonOtmadnessDownloadKeywordPage, { generateMetadata } from './new-season-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOtmadnessDownloadKeywordPage />;
}
