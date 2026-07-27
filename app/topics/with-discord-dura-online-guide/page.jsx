import WithDiscordDuraOnlineGuideKeywordPage, { generateMetadata } from './with-discord-dura-online-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDuraOnlineGuideKeywordPage />;
}
