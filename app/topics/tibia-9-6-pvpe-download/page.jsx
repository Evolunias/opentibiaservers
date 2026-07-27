import Tibia96PvpeDownloadKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeDownloadKeywordPage />;
}
