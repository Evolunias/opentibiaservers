import WithDiscordTibijkaOnlineKeywordPage, { generateMetadata } from './with-discord-tibijka-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibijkaOnlineKeywordPage />;
}
