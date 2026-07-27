import WithDiscordWikiChileKeywordPage, { generateMetadata } from './with-discord-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordWikiChileKeywordPage />;
}
