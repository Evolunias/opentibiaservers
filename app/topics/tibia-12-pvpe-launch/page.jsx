import Tibia12PvpeLaunchKeywordPage, { generateMetadata } from './tibia-12-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeLaunchKeywordPage />;
}
