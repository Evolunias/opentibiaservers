import FreshStartOtmadnessDownloadKeywordPage, { generateMetadata } from './fresh-start-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOtmadnessDownloadKeywordPage />;
}
