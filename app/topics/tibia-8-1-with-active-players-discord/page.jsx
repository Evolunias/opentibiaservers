import Tibia81WithActivePlayersDiscordKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersDiscordKeywordPage />;
}
