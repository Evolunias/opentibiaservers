import WithDiscordNepreniaOnlineKeywordPage, { generateMetadata } from './with-discord-neprenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNepreniaOnlineKeywordPage />;
}
