import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-gunzodus-discord');
}

export default function NoResetGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-gunzodus-discord" />;
}
