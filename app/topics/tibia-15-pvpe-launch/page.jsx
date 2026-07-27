import Tibia15PvpeLaunchKeywordPage, { generateMetadata } from './tibia-15-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeLaunchKeywordPage />;
}
