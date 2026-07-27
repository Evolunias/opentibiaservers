import Tibia12RealMapDownloadKeywordPage, { generateMetadata } from './tibia-12-real-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapDownloadKeywordPage />;
}
