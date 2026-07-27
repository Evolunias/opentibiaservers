import Tibia86WithActivePlayersDiscordKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersDiscordKeywordPage />;
}
