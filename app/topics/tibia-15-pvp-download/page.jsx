import Tibia15PvpDownloadKeywordPage, { generateMetadata } from './tibia-15-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpDownloadKeywordPage />;
}
