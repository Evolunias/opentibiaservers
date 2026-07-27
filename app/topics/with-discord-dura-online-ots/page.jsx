import WithDiscordDuraOnlineOtsKeywordPage, { generateMetadata } from './with-discord-dura-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineOtsKeywordPage />;
}
