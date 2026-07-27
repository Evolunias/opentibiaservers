import WithDiscordSerenityOnlineKeywordPage, { generateMetadata } from './with-discord-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordSerenityOnlineKeywordPage />;
}
