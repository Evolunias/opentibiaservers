import Tibia84PvpeLaunchKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeLaunchKeywordPage />;
}
