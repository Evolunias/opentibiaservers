import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-online');
}

export default function HighrateGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-online" />;
}
