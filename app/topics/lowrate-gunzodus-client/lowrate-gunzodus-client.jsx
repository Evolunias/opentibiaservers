import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-client');
}

export default function LowrateGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-client" />;
}
