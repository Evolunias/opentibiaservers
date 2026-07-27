import WithDiscordNilotOnlineKeywordPage, { generateMetadata } from './with-discord-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordNilotOnlineKeywordPage />;
}
