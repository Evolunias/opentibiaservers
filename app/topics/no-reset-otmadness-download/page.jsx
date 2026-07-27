import NoResetOtmadnessDownloadKeywordPage, { generateMetadata } from './no-reset-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOtmadnessDownloadKeywordPage />;
}
