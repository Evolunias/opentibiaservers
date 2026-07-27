import OldSchoolDiscordBrazilKeywordPage, { generateMetadata } from './old-school-discord-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDiscordBrazilKeywordPage />;
}
