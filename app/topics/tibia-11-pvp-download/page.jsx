import Tibia11PvpDownloadKeywordPage, { generateMetadata } from './tibia-11-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpDownloadKeywordPage />;
}
