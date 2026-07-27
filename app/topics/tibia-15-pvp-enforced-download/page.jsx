import Tibia15PvpEnforcedDownloadKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedDownloadKeywordPage />;
}
