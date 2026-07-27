import Tibia80NonPvpDownloadKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpDownloadKeywordPage />;
}
