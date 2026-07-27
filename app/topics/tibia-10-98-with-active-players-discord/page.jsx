import Tibia1098WithActivePlayersDiscordKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersDiscordKeywordPage />;
}
