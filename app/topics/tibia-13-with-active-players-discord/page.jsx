import Tibia13WithActivePlayersDiscordKeywordPage, { generateMetadata } from './tibia-13-with-active-players-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersDiscordKeywordPage />;
}
