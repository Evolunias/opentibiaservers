import OldSchoolEvoleraDiscordKeywordPage, { generateMetadata } from './old-school-evolera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolEvoleraDiscordKeywordPage />;
}
