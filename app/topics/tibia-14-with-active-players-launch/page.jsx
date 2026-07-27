import Tibia14WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-14-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersLaunchKeywordPage />;
}
