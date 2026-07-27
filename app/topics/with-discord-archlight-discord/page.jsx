import WithDiscordArchlightDiscordKeywordPage, { generateMetadata } from './with-discord-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordArchlightDiscordKeywordPage />;
}
