import Tibia76NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpDownloadKeywordPage />;
}
