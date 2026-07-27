import Tibia81WithActivePlayersClientKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersClientKeywordPage />;
}
