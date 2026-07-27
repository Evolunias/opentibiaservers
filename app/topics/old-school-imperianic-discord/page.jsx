import OldSchoolImperianicDiscordKeywordPage, { generateMetadata } from './old-school-imperianic-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicDiscordKeywordPage />;
}
