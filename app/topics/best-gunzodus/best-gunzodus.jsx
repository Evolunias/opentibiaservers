import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus');
}

export default function BestGunzodusKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus" />;
}
