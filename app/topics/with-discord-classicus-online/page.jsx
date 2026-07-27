import WithDiscordClassicusOnlineKeywordPage, { generateMetadata } from './with-discord-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClassicusOnlineKeywordPage />;
}
