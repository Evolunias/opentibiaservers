import OldSchoolLumineraDiscordKeywordPage, { generateMetadata } from './old-school-luminera-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraDiscordKeywordPage />;
}
