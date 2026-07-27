import Tibia86WithActivePlayersGuideKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersGuideKeywordPage />;
}
