import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-login');
}

export default function BestGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-login" />;
}
