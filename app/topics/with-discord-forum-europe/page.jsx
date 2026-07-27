import WithDiscordForumEuropeKeywordPage, { generateMetadata } from './with-discord-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumEuropeKeywordPage />;
}
