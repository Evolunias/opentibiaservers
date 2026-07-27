import WithDiscordDuraOnlineClientKeywordPage, { generateMetadata } from './with-discord-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineClientKeywordPage />;
}
