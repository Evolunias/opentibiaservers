import WithDiscordNtoStarOnlineKeywordPage, { generateMetadata } from './with-discord-nto-star-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNtoStarOnlineKeywordPage />;
}
