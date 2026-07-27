import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-discord');
}

export default function HighrateGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-discord" />;
}
