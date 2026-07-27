import PvpeServerLaunchKeywordPage, { generateMetadata } from './pvpe-server-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServerLaunchKeywordPage />;
}
