import WithDiscordRealestaOnlineKeywordPage, { generateMetadata } from './with-discord-realesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRealestaOnlineKeywordPage />;
}
