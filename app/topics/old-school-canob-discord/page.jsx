import OldSchoolCanobDiscordKeywordPage, { generateMetadata } from './old-school-canob-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobDiscordKeywordPage />;
}
