import WithDiscordGunzodusOtsKeywordPage, { generateMetadata } from './with-discord-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusOtsKeywordPage />;
}
