import Tibia11RealMapDownloadKeywordPage, { generateMetadata } from './tibia-11-real-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapDownloadKeywordPage />;
}
