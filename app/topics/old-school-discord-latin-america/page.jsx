import OldSchoolDiscordLatinAmericaKeywordPage, { generateMetadata } from './old-school-discord-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordLatinAmericaKeywordPage />;
}
