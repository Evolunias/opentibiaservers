import HighrateOtmadnessDownloadKeywordPage, { generateMetadata } from './highrate-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessDownloadKeywordPage />;
}
