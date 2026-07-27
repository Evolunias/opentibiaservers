import OldSchoolThaisotDiscordKeywordPage, { generateMetadata } from './old-school-thaisot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThaisotDiscordKeywordPage />;
}
