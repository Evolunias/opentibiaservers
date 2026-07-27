import Tibia80WithActivePlayersGuideKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersGuideKeywordPage />;
}
