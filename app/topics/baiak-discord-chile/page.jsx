import BaiakDiscordChileKeywordPage, { generateMetadata } from './baiak-discord-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakDiscordChileKeywordPage />;
}
