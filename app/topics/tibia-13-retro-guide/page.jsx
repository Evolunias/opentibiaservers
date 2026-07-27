import Tibia13RetroGuideKeywordPage, { generateMetadata } from './tibia-13-retro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroGuideKeywordPage />;
}
