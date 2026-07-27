import Tibia14PvpeDownloadKeywordPage, { generateMetadata } from './tibia-14-pvpe-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeDownloadKeywordPage />;
}
