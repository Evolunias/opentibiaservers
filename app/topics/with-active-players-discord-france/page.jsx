import WithActivePlayersDiscordFranceKeywordPage, { generateMetadata } from './with-active-players-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersDiscordFranceKeywordPage />;
}
