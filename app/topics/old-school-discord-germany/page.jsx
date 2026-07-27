import OldSchoolDiscordGermanyKeywordPage, { generateMetadata } from './old-school-discord-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordGermanyKeywordPage />;
}
