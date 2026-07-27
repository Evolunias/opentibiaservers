import OldSchoolCoxaotDiscordKeywordPage, { generateMetadata } from './old-school-coxaot-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCoxaotDiscordKeywordPage />;
}
