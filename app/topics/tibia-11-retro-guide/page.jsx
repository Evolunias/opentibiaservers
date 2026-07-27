import Tibia11RetroGuideKeywordPage, { generateMetadata } from './tibia-11-retro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroGuideKeywordPage />;
}
