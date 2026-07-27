import Tibia12PvpeDownloadKeywordPage, { generateMetadata } from './tibia-12-pvpe-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeDownloadKeywordPage />;
}
