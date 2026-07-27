import Tibia15RealMapLaunchKeywordPage, { generateMetadata } from './tibia-15-real-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RealMapLaunchKeywordPage />;
}
