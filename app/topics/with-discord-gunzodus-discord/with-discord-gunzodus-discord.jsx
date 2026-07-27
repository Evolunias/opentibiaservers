import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus-discord');
}

export default function WithDiscordGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus-discord" />;
}
