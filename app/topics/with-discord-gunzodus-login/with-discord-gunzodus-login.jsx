import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-login');
}

export default function WithDiscordGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-login" />;
}
