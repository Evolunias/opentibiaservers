import Tibia80PvpDownloadKeywordPage, { generateMetadata } from './tibia-8-0-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpDownloadKeywordPage />;
}
