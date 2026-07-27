import Tibia96RealMapLaunchKeywordPage, { generateMetadata } from './tibia-9-6-real-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RealMapLaunchKeywordPage />;
}
