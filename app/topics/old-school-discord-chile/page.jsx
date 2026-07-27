import OldSchoolDiscordChileKeywordPage, { generateMetadata } from './old-school-discord-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordChileKeywordPage />;
}
