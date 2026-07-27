import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-client');
}

export default function BestGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-client" />;
}
