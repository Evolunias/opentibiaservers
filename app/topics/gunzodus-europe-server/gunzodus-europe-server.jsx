import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-europe-server');
}

export default function GunzodusEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-europe-server" />;
}
