import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-create-account');
}

export default function WithDiscordGunzodusCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-create-account" />;
}
