import Tibia15RetroLaunchKeywordPage, { generateMetadata } from './tibia-15-retro-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroLaunchKeywordPage />;
}
