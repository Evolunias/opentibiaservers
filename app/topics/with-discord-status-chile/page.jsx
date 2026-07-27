import WithDiscordStatusChileKeywordPage, { generateMetadata } from './with-discord-status-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordStatusChileKeywordPage />;
}
