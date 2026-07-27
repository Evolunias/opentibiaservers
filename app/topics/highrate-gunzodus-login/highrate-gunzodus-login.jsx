import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-login');
}

export default function HighrateGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-login" />;
}
