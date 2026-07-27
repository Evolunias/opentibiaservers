import WithDiscordDuraOnlineDiscordKeywordPage, { generateMetadata } from './with-discord-dura-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineDiscordKeywordPage />;
}
