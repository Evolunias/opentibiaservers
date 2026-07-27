import Tibia100PvpeLaunchKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeLaunchKeywordPage />;
}
