import Tibia11NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-11-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpDownloadKeywordPage />;
}
