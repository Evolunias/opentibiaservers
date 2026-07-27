import OldSchoolBlazeraDiscordKeywordPage, { generateMetadata } from './old-school-blazera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraDiscordKeywordPage />;
}
