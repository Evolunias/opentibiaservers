import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-client');
}

export default function TopGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-client" />;
}
