import OldSchoolTibianusDiscordKeywordPage, { generateMetadata } from './old-school-tibianus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusDiscordKeywordPage />;
}
