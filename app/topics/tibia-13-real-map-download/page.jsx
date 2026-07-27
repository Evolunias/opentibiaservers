import Tibia13RealMapDownloadKeywordPage, { generateMetadata } from './tibia-13-real-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapDownloadKeywordPage />;
}
