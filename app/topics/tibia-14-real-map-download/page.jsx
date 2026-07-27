import Tibia14RealMapDownloadKeywordPage, { generateMetadata } from './tibia-14-real-map-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapDownloadKeywordPage />;
}
