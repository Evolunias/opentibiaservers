import OldSchoolTibiascapeDiscordKeywordPage, { generateMetadata } from './old-school-tibiascape-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeDiscordKeywordPage />;
}
