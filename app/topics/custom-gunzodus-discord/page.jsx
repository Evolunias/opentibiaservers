import CustomGunzodusDiscordKeywordPage, { generateMetadata } from './custom-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusDiscordKeywordPage />;
}
