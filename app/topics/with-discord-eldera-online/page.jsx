import WithDiscordElderaOnlineKeywordPage, { generateMetadata } from './with-discord-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordElderaOnlineKeywordPage />;
}
