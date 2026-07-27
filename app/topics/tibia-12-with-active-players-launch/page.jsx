import Tibia12WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-12-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersLaunchKeywordPage />;
}
