import Tibia80RetroGuideKeywordPage, { generateMetadata } from './tibia-8-0-retro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroGuideKeywordPage />;
}
