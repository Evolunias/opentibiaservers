import Tibia96WithActivePlayersDiscordKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersDiscordKeywordPage />;
}
