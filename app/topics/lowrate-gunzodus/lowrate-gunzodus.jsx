import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus');
}

export default function LowrateGunzodusKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus" />;
}
