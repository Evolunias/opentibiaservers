import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-ot-server');
}

export default function BestGunzodusOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-ot-server" />;
}
