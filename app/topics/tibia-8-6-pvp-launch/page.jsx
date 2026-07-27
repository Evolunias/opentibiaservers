import Tibia86PvpLaunchKeywordPage, { generateMetadata } from './tibia-8-6-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpLaunchKeywordPage />;
}
