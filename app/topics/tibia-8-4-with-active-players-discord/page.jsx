import Tibia84WithActivePlayersDiscordKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersDiscordKeywordPage />;
}
