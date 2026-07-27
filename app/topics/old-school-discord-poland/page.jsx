import OldSchoolDiscordPolandKeywordPage, { generateMetadata } from './old-school-discord-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordPolandKeywordPage />;
}
