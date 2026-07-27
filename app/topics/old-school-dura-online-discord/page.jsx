import OldSchoolDuraOnlineDiscordKeywordPage, { generateMetadata } from './old-school-dura-online-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineDiscordKeywordPage />;
}
