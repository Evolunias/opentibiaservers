import OldSchoolClassicusDiscordKeywordPage, { generateMetadata } from './old-school-classicus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusDiscordKeywordPage />;
}
