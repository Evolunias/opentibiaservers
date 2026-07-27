import WithDiscordForumNorthAmericaKeywordPage, { generateMetadata } from './with-discord-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumNorthAmericaKeywordPage />;
}
