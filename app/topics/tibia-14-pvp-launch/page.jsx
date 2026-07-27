import Tibia14PvpLaunchKeywordPage, { generateMetadata } from './tibia-14-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpLaunchKeywordPage />;
}
