import Tibia11RealMapLaunchKeywordPage, { generateMetadata } from './tibia-11-real-map-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapLaunchKeywordPage />;
}
