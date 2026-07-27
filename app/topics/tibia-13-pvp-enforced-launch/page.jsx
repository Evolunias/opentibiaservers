import Tibia13PvpEnforcedLaunchKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedLaunchKeywordPage />;
}
