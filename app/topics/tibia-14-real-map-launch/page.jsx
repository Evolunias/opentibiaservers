import Tibia14RealMapLaunchKeywordPage, { generateMetadata } from './tibia-14-real-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapLaunchKeywordPage />;
}
