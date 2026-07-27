import Tibia81RetroGuideKeywordPage, { generateMetadata } from './tibia-8-1-retro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RetroGuideKeywordPage />;
}
