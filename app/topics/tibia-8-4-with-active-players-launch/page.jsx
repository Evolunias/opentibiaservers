import Tibia84WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersLaunchKeywordPage />;
}
