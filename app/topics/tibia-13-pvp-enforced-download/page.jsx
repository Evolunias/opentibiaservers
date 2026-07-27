import Tibia13PvpEnforcedDownloadKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedDownloadKeywordPage />;
}
