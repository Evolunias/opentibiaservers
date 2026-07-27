import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-gunzodus-ots');
}

export default function HighrateGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-gunzodus-ots" />;
}
