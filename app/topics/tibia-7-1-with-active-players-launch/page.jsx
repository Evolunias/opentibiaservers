import Tibia71WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-7-1-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithActivePlayersLaunchKeywordPage />;
}
