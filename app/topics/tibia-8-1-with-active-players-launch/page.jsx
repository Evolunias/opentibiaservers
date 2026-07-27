import Tibia81WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersLaunchKeywordPage />;
}
