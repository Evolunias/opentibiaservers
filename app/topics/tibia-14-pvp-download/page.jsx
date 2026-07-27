import Tibia14PvpDownloadKeywordPage, { generateMetadata } from './tibia-14-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpDownloadKeywordPage />;
}
