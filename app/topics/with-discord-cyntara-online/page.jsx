import WithDiscordCyntaraOnlineKeywordPage, { generateMetadata } from './with-discord-cyntara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCyntaraOnlineKeywordPage />;
}
