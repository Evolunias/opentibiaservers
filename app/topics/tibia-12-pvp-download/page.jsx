import Tibia12PvpDownloadKeywordPage, { generateMetadata } from './tibia-12-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpDownloadKeywordPage />;
}
