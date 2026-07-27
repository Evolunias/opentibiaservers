import Tibia15WithActivePlayersGuideKeywordPage, { generateMetadata } from './tibia-15-with-active-players-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersGuideKeywordPage />;
}
