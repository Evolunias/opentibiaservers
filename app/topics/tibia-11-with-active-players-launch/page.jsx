import Tibia11WithActivePlayersLaunchKeywordPage, { generateMetadata } from './tibia-11-with-active-players-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersLaunchKeywordPage />;
}
