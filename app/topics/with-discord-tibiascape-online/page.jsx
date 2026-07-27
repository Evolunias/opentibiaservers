import WithDiscordTibiascapeOnlineKeywordPage, { generateMetadata } from './with-discord-tibiascape-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordTibiascapeOnlineKeywordPage />;
}
