import Tibia81NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpDownloadKeywordPage />;
}
