import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-gunzodus-discord');
}

export default function NewGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-gunzodus-discord" />;
}
