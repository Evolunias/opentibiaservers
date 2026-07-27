import NonPvpDiscordChileKeywordPage, { generateMetadata } from './non-pvp-discord-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpDiscordChileKeywordPage />;
}
