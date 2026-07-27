import WithDiscordVenoreotOnlineKeywordPage, { generateMetadata } from './with-discord-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordVenoreotOnlineKeywordPage />;
}
