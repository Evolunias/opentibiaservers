import WithDiscordGunzodusRulesKeywordPage, { generateMetadata } from './with-discord-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusRulesKeywordPage />;
}
