import CurrentOtmadnessDownloadKeywordPage, { generateMetadata } from './current-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessDownloadKeywordPage />;
}
