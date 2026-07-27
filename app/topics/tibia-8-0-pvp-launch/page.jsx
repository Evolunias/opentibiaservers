import Tibia80PvpLaunchKeywordPage, { generateMetadata } from './tibia-8-0-pvp-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpLaunchKeywordPage />;
}
