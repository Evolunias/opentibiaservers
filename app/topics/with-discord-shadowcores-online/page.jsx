import WithDiscordShadowcoresOnlineKeywordPage, { generateMetadata } from './with-discord-shadowcores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordShadowcoresOnlineKeywordPage />;
}
