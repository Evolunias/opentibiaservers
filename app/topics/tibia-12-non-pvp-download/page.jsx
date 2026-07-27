import Tibia12NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-12-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpDownloadKeywordPage />;
}
