import RealMapOtmadnessDownloadKeywordPage, { generateMetadata } from './real-map-otmadness-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessDownloadKeywordPage />;
}
