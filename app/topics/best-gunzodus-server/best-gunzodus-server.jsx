import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-server');
}

export default function BestGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-server" />;
}
