import TibiaPrivateServerLaunchKeywordPage, { generateMetadata } from './tibia-private-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaPrivateServerLaunchKeywordPage />;
}
