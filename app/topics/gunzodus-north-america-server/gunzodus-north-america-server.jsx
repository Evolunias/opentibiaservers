import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-north-america-server');
}

export default function GunzodusNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-north-america-server" />;
}
