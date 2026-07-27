import Tibia86PvpDownloadKeywordPage, { generateMetadata } from './tibia-8-6-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpDownloadKeywordPage />;
}
