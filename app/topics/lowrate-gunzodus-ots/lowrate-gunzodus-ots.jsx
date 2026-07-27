import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-ots');
}

export default function LowrateGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-ots" />;
}
