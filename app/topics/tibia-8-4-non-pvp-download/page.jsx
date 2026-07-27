import Tibia84NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpDownloadKeywordPage />;
}
