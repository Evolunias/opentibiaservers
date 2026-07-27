import WithDiscordForumSwedenKeywordPage, { generateMetadata } from './with-discord-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumSwedenKeywordPage />;
}
