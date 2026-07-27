import Tibia71PvpDownloadKeywordPage, { generateMetadata } from './tibia-7-1-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpDownloadKeywordPage />;
}
