import WithDiscordUnlineOnlineKeywordPage, { generateMetadata } from './with-discord-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordUnlineOnlineKeywordPage />;
}
