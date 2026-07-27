import WithDiscordGuideChileKeywordPage, { generateMetadata } from './with-discord-guide-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGuideChileKeywordPage />;
}
