import WithDiscordDuraOnlineOtKeywordPage, { generateMetadata } from './with-discord-dura-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineOtKeywordPage />;
}
