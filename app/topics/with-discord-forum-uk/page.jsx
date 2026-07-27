import WithDiscordForumUkKeywordPage, { generateMetadata } from './with-discord-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumUkKeywordPage />;
}
