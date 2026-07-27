import Tibia86RealMapLaunchKeywordPage, { generateMetadata } from './tibia-8-6-real-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapLaunchKeywordPage />;
}
