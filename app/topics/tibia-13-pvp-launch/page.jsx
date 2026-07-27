import Tibia13PvpLaunchKeywordPage, { generateMetadata } from './tibia-13-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpLaunchKeywordPage />;
}
