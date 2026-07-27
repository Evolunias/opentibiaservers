import WithActivePlayersDiscordUsaKeywordPage, { generateMetadata } from './with-active-players-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersDiscordUsaKeywordPage />;
}
