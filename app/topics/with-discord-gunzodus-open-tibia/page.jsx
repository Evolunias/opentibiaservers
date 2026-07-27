import WithDiscordGunzodusOpenTibiaKeywordPage, { generateMetadata } from './with-discord-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusOpenTibiaKeywordPage />;
}
