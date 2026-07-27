import Tibia80PvpeDownloadKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeDownloadKeywordPage />;
}
