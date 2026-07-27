import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-gunzodus');
}

export default function WithDiscordGunzodusKeywordPage() {
  return <StaticKeywordPage slug="with-discord-gunzodus" />;
}
