import OldSchoolTibiaretroDiscordKeywordPage, { generateMetadata } from './old-school-tibiaretro-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroDiscordKeywordPage />;
}
