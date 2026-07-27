import WithDiscordForumChileKeywordPage, { generateMetadata } from './with-discord-forum-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordForumChileKeywordPage />;
}
