import Tibia15WithActivePlayersDiscordKeywordPage, { generateMetadata } from './tibia-15-with-active-players-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersDiscordKeywordPage />;
}
