import CustomMapDiscordChileKeywordPage, { generateMetadata } from './custom-map-discord-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapDiscordChileKeywordPage />;
}
