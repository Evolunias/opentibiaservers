import OldSchoolDiscordFranceKeywordPage, { generateMetadata } from './old-school-discord-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordFranceKeywordPage />;
}
