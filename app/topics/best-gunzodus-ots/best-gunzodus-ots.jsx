import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-ots');
}

export default function BestGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-ots" />;
}
