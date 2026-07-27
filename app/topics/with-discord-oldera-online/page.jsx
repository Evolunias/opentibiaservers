import WithDiscordOlderaOnlineKeywordPage, { generateMetadata } from './with-discord-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordOlderaOnlineKeywordPage />;
}
