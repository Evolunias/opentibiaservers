import OldSchoolTibiameDiscordKeywordPage, { generateMetadata } from './old-school-tibiame-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameDiscordKeywordPage />;
}
