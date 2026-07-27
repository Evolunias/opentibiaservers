import Tibia13NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-13-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpDownloadKeywordPage />;
}
