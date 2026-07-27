import OldSchoolDiscordUsaKeywordPage, { generateMetadata } from './old-school-discord-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordUsaKeywordPage />;
}
