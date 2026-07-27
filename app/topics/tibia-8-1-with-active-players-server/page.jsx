import Tibia81WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersServerKeywordPage />;
}
