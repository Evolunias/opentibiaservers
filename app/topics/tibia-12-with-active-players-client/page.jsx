import Tibia12WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-12-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersClientKeywordPage />;
}
