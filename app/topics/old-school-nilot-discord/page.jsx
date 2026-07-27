import OldSchoolNilotDiscordKeywordPage, { generateMetadata } from './old-school-nilot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotDiscordKeywordPage />;
}
