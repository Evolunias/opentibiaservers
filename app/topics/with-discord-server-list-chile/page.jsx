import WithDiscordServerListChileKeywordPage, { generateMetadata } from './with-discord-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServerListChileKeywordPage />;
}
