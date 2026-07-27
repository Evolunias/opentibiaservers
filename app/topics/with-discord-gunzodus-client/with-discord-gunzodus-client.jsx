import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-client');
}

export default function WithDiscordGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-client" />;
}
