import WithDiscordCanobOnlineKeywordPage, { generateMetadata } from './with-discord-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCanobOnlineKeywordPage />;
}
