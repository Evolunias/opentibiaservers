import Tibia84RetroGuideKeywordPage, { generateMetadata } from './tibia-8-4-retro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroGuideKeywordPage />;
}
