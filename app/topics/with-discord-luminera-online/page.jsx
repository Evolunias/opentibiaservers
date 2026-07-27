import WithDiscordLumineraOnlineKeywordPage, { generateMetadata } from './with-discord-luminera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordLumineraOnlineKeywordPage />;
}
