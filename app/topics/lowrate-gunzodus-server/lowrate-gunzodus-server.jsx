import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-server');
}

export default function LowrateGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-server" />;
}
