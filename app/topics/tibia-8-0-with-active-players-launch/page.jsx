import Tibia80WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersLaunchKeywordPage />;
}
