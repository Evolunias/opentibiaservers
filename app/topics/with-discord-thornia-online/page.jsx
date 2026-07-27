import WithDiscordThorniaOnlineKeywordPage, { generateMetadata } from './with-discord-thornia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordThorniaOnlineKeywordPage />;
}
