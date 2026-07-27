import Tibia12WithActivePlayersGuideKeywordPage, { generateMetadata } from './tibia-12-with-active-players-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersGuideKeywordPage />;
}
