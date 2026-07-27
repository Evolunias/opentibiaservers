import OldSchoolSaintsotDiscordKeywordPage, { generateMetadata } from './old-school-saintsot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotDiscordKeywordPage />;
}
