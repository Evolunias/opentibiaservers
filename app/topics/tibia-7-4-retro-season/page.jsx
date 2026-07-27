import Tibia74RetroSeasonKeywordPage, { generateMetadata } from './tibia-7-4-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RetroSeasonKeywordPage />;
}
