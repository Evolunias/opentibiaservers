import Tibia11PvpEnforcedGuideKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedGuideKeywordPage />;
}
