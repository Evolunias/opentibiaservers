import WithDiscordDuraOnlineKeywordPage, { generateMetadata } from './with-discord-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineKeywordPage />;
}
