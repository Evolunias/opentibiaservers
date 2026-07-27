import OldSchoolGunzodusDiscordKeywordPage, { generateMetadata } from './old-school-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusDiscordKeywordPage />;
}
