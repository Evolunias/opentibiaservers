import OldSchoolTibiantisDiscordKeywordPage, { generateMetadata } from './old-school-tibiantis-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiantisDiscordKeywordPage />;
}
