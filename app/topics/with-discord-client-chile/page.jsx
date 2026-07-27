import WithDiscordClientChileKeywordPage, { generateMetadata } from './with-discord-client-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordClientChileKeywordPage />;
}
