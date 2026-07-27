import Tibia80RealMapLaunchKeywordPage, { generateMetadata } from './tibia-8-0-real-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RealMapLaunchKeywordPage />;
}
