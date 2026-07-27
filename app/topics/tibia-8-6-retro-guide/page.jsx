import Tibia86RetroGuideKeywordPage, { generateMetadata } from './tibia-8-6-retro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroGuideKeywordPage />;
}
