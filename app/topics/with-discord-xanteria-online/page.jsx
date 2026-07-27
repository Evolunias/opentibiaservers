import WithDiscordXanteriaOnlineKeywordPage, { generateMetadata } from './with-discord-xanteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordXanteriaOnlineKeywordPage />;
}
