import Tibia76WithActivePlayersGuideKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersGuideKeywordPage />;
}
