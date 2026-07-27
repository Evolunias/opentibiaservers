import Tibia80RetroLaunchKeywordPage, { generateMetadata } from './tibia-8-0-retro-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroLaunchKeywordPage />;
}
