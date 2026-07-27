import WithDiscordDuraOnlineLoginKeywordPage, { generateMetadata } from './with-discord-dura-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineLoginKeywordPage />;
}
