import Tibia96PvpLaunchKeywordPage, { generateMetadata } from './tibia-9-6-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpLaunchKeywordPage />;
}
