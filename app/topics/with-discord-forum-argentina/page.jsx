import WithDiscordForumArgentinaKeywordPage, { generateMetadata } from './with-discord-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumArgentinaKeywordPage />;
}
