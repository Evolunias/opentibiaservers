import RetroDiscordChileKeywordPage, { generateMetadata } from './retro-discord-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroDiscordChileKeywordPage />;
}
