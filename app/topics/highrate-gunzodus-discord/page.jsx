import HighrateGunzodusDiscordKeywordPage, { generateMetadata } from './highrate-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusDiscordKeywordPage />;
}
