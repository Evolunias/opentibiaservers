import RealMapDiscordChileKeywordPage, { generateMetadata } from './real-map-discord-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDiscordChileKeywordPage />;
}
