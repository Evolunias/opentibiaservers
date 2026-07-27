import Tibia100NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpDownloadKeywordPage />;
}
