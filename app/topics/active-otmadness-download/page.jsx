import ActiveOtmadnessDownloadKeywordPage, { generateMetadata } from './active-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOtmadnessDownloadKeywordPage />;
}
