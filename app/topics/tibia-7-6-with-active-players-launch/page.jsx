import Tibia76WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersLaunchKeywordPage />;
}
