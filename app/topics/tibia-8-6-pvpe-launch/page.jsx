import Tibia86PvpeLaunchKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeLaunchKeywordPage />;
}
