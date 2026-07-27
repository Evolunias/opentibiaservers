import WithDiscordSabrehavenOnlineKeywordPage, { generateMetadata } from './with-discord-sabrehaven-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSabrehavenOnlineKeywordPage />;
}
