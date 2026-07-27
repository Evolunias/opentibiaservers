import WithDiscordCarlinotOnlineKeywordPage, { generateMetadata } from './with-discord-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordCarlinotOnlineKeywordPage />;
}
