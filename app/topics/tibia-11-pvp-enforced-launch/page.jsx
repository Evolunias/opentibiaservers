import Tibia11PvpEnforcedLaunchKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedLaunchKeywordPage />;
}
