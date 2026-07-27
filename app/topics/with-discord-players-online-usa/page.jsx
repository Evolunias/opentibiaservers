import WithDiscordPlayersOnlineUsaKeywordPage, { generateMetadata } from './with-discord-players-online-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordPlayersOnlineUsaKeywordPage />;
}
