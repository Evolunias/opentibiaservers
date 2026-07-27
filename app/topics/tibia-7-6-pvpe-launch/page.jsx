import Tibia76PvpeLaunchKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeLaunchKeywordPage />;
}
