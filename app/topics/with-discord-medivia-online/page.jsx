import WithDiscordMediviaOnlineKeywordPage, { generateMetadata } from './with-discord-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordMediviaOnlineKeywordPage />;
}
