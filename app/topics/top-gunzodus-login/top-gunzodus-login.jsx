import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-login');
}

export default function TopGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-login" />;
}
