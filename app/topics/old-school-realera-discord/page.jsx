import OldSchoolRealeraDiscordKeywordPage, { generateMetadata } from './old-school-realera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraDiscordKeywordPage />;
}
