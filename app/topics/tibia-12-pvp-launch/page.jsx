import Tibia12PvpLaunchKeywordPage, { generateMetadata } from './tibia-12-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpLaunchKeywordPage />;
}
