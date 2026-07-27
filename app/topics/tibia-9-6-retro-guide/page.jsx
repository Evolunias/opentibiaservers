import Tibia96RetroGuideKeywordPage, { generateMetadata } from './tibia-9-6-retro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RetroGuideKeywordPage />;
}
