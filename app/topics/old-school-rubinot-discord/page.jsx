import OldSchoolRubinotDiscordKeywordPage, { generateMetadata } from './old-school-rubinot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotDiscordKeywordPage />;
}
