import WithDiscordForumPolandKeywordPage, { generateMetadata } from './with-discord-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumPolandKeywordPage />;
}
