import Tibia13PvpeLaunchKeywordPage, { generateMetadata } from './tibia-13-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeLaunchKeywordPage />;
}
