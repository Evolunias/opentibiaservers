import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-server');
}

export default function TopGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-server" />;
}
