import OldSchoolTibiaServerDiscordKeywordPage, { generateMetadata } from './old-school-tibia-server-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerDiscordKeywordPage />;
}
