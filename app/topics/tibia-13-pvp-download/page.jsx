import Tibia13PvpDownloadKeywordPage, { generateMetadata } from './tibia-13-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpDownloadKeywordPage />;
}
