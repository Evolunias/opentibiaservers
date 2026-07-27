import WithDiscordForumGermanyKeywordPage, { generateMetadata } from './with-discord-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumGermanyKeywordPage />;
}
