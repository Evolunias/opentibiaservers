import OldSchoolNostaltherDiscordKeywordPage, { generateMetadata } from './old-school-nostalther-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherDiscordKeywordPage />;
}
