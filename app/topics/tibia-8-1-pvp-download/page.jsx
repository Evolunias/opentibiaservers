import Tibia81PvpDownloadKeywordPage, { generateMetadata } from './tibia-8-1-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpDownloadKeywordPage />;
}
