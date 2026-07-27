import Tibia13PvpeDownloadKeywordPage, { generateMetadata } from './tibia-13-pvpe-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeDownloadKeywordPage />;
}
