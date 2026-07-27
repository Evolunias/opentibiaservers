import Tibia13WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-13-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersLaunchKeywordPage />;
}
