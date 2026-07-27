import WithDiscordForumLatinAmericaKeywordPage, { generateMetadata } from './with-discord-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumLatinAmericaKeywordPage />;
}
