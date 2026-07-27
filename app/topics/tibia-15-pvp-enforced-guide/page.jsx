import Tibia15PvpEnforcedGuideKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedGuideKeywordPage />;
}
