import Tibia96PvpeLaunchKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeLaunchKeywordPage />;
}
