import Tibia71PvpeLaunchKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpeLaunchKeywordPage />;
}
