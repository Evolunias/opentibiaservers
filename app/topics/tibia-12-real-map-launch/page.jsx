import Tibia12RealMapLaunchKeywordPage, { generateMetadata } from './tibia-12-real-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapLaunchKeywordPage />;
}
