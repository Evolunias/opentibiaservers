import OtmadnessDownloadKeywordPage, { generateMetadata } from './otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessDownloadKeywordPage />;
}
