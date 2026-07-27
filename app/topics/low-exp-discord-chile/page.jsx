import LowExpDiscordChileKeywordPage, { generateMetadata } from './low-exp-discord-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDiscordChileKeywordPage />;
}
