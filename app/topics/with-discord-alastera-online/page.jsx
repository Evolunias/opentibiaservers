import WithDiscordAlasteraOnlineKeywordPage, { generateMetadata } from './with-discord-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordAlasteraOnlineKeywordPage />;
}
