import Tibia15PvpeDownloadKeywordPage, { generateMetadata } from './tibia-15-pvpe-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeDownloadKeywordPage />;
}
