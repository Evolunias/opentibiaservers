import WithDiscordGunzodusOtServerKeywordPage, { generateMetadata } from './with-discord-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusOtServerKeywordPage />;
}
