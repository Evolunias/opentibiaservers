import WithDiscordForumUsaKeywordPage, { generateMetadata } from './with-discord-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumUsaKeywordPage />;
}
