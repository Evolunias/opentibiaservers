import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-ot-server');
}

export default function LowrateGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-ot-server" />;
}
