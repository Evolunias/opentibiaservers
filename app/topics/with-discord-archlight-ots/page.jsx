import WithDiscordArchlightOtsKeywordPage, { generateMetadata } from './with-discord-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightOtsKeywordPage />;
}
