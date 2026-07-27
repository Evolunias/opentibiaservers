import WithDiscordGunzodusGuideKeywordPage, { generateMetadata } from './with-discord-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusGuideKeywordPage />;
}
