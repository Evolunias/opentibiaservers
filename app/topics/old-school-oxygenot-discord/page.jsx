import OldSchoolOxygenotDiscordKeywordPage, { generateMetadata } from './old-school-oxygenot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotDiscordKeywordPage />;
}
