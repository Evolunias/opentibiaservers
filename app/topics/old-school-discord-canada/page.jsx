import OldSchoolDiscordCanadaKeywordPage, { generateMetadata } from './old-school-discord-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordCanadaKeywordPage />;
}
