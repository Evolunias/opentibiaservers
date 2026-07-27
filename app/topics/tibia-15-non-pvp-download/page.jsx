import Tibia15NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-15-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpDownloadKeywordPage />;
}
