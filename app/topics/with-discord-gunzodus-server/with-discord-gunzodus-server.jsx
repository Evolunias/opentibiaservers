import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-server');
}

export default function WithDiscordGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-server" />;
}
