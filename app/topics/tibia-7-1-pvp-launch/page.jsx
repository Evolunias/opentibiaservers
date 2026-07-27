import Tibia71PvpLaunchKeywordPage, { generateMetadata } from './tibia-7-1-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpLaunchKeywordPage />;
}
