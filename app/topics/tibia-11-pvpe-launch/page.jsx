import Tibia11PvpeLaunchKeywordPage, { generateMetadata } from './tibia-11-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeLaunchKeywordPage />;
}
