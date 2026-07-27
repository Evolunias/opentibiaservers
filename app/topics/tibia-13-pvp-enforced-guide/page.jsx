import Tibia13PvpEnforcedGuideKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedGuideKeywordPage />;
}
