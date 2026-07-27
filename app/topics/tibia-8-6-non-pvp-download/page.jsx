import Tibia86NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpDownloadKeywordPage />;
}
