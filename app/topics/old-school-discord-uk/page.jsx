import OldSchoolDiscordUkKeywordPage, { generateMetadata } from './old-school-discord-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordUkKeywordPage />;
}
