import Tibia13RealMapLaunchKeywordPage, { generateMetadata } from './tibia-13-real-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapLaunchKeywordPage />;
}
