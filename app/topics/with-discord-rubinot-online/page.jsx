import WithDiscordRubinotOnlineKeywordPage, { generateMetadata } from './with-discord-rubinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordRubinotOnlineKeywordPage />;
}
