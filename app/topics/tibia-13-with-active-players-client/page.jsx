import Tibia13WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-13-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersClientKeywordPage />;
}
