import Tibia80PvpeLaunchKeywordPage, { generateMetadata } from './tibia-8-0-pvpe-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpeLaunchKeywordPage />;
}
