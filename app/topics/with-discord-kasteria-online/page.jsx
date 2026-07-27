import WithDiscordKasteriaOnlineKeywordPage, { generateMetadata } from './with-discord-kasteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordKasteriaOnlineKeywordPage />;
}
