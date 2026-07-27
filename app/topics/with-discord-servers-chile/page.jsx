import WithDiscordServersChileKeywordPage, { generateMetadata } from './with-discord-servers-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordServersChileKeywordPage />;
}
