import WithActivePlayersDiscordEuropeKeywordPage, { generateMetadata } from './with-active-players-discord-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersDiscordEuropeKeywordPage />;
}
