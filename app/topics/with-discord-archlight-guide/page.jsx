import WithDiscordArchlightGuideKeywordPage, { generateMetadata } from './with-discord-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightGuideKeywordPage />;
}
