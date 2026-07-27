import OfficialGunzodusDiscordKeywordPage, { generateMetadata } from './official-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusDiscordKeywordPage />;
}
