import Tibia96NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpDownloadKeywordPage />;
}
