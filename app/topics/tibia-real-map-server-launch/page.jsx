import TibiaRealMapServerLaunchKeywordPage, { generateMetadata } from './tibia-real-map-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaRealMapServerLaunchKeywordPage />;
}
