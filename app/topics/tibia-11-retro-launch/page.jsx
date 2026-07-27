import Tibia11RetroLaunchKeywordPage, { generateMetadata } from './tibia-11-retro-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroLaunchKeywordPage />;
}
