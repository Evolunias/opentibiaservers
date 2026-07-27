import Tibia84PvpDownloadKeywordPage, { generateMetadata } from './tibia-8-4-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpDownloadKeywordPage />;
}
