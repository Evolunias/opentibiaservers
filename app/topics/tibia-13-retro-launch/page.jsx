import Tibia13RetroLaunchKeywordPage, { generateMetadata } from './tibia-13-retro-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroLaunchKeywordPage />;
}
