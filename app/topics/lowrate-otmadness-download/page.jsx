import LowrateOtmadnessDownloadKeywordPage, { generateMetadata } from './lowrate-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOtmadnessDownloadKeywordPage />;
}
