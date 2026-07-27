import CustomOtmadnessDownloadKeywordPage, { generateMetadata } from './custom-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessDownloadKeywordPage />;
}
