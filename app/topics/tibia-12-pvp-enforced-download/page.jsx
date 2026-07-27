import Tibia12PvpEnforcedDownloadKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedDownloadKeywordPage />;
}
