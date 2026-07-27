import LowrateGunzodusDiscordKeywordPage, { generateMetadata } from './lowrate-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusDiscordKeywordPage />;
}
