import Tibia12PvpEnforcedLaunchKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedLaunchKeywordPage />;
}
