import WithDiscordForumMexicoKeywordPage, { generateMetadata } from './with-discord-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumMexicoKeywordPage />;
}
