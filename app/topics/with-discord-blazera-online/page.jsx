import WithDiscordBlazeraOnlineKeywordPage, { generateMetadata } from './with-discord-blazera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordBlazeraOnlineKeywordPage />;
}
