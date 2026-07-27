import OldSchoolUnlineDiscordKeywordPage, { generateMetadata } from './old-school-unline-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineDiscordKeywordPage />;
}
