import Tibia11PvpeDownloadKeywordPage, { generateMetadata } from './tibia-11-pvpe-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeDownloadKeywordPage />;
}
