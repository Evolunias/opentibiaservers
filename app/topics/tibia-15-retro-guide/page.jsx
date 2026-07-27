import Tibia15RetroGuideKeywordPage, { generateMetadata } from './tibia-15-retro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroGuideKeywordPage />;
}
