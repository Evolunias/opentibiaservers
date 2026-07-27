import Tibia96PvpDownloadKeywordPage, { generateMetadata } from './tibia-9-6-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpDownloadKeywordPage />;
}
