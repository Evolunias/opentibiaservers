import OldSchoolArchlightDiscordKeywordPage, { generateMetadata } from './old-school-archlight-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightDiscordKeywordPage />;
}
