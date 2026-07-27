import Tibia100WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersLaunchKeywordPage />;
}
