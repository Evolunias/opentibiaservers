import WithDiscordYurotsOnlineKeywordPage, { generateMetadata } from './with-discord-yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordYurotsOnlineKeywordPage />;
}
