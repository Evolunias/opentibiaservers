import WithDiscordMidhemOnlineKeywordPage, { generateMetadata } from './with-discord-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMidhemOnlineKeywordPage />;
}
