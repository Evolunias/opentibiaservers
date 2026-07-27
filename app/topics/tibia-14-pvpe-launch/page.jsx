import Tibia14PvpeLaunchKeywordPage, { generateMetadata } from './tibia-14-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeLaunchKeywordPage />;
}
