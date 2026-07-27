import PvpeDiscordChileKeywordPage, { generateMetadata } from './pvpe-discord-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeDiscordChileKeywordPage />;
}
