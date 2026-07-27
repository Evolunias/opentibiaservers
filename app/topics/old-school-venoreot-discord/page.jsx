import OldSchoolVenoreotDiscordKeywordPage, { generateMetadata } from './old-school-venoreot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotDiscordKeywordPage />;
}
