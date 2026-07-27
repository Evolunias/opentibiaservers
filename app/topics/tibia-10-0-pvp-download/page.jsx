import Tibia100PvpDownloadKeywordPage, { generateMetadata } from './tibia-10-0-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpDownloadKeywordPage />;
}
