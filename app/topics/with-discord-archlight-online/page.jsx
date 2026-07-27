import WithDiscordArchlightOnlineKeywordPage, { generateMetadata } from './with-discord-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightOnlineKeywordPage />;
}
