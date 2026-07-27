import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-canada-server');
}

export default function GunzodusCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-canada-server" />;
}
