import Tibia14NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-14-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpDownloadKeywordPage />;
}
