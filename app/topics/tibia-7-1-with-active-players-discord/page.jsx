import Tibia71WithActivePlayersDiscordKeywordPage, { generateMetadata } from './tibia-7-1-with-active-players-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithActivePlayersDiscordKeywordPage />;
}
