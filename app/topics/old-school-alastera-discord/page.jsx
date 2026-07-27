import OldSchoolAlasteraDiscordKeywordPage, { generateMetadata } from './old-school-alastera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraDiscordKeywordPage />;
}
