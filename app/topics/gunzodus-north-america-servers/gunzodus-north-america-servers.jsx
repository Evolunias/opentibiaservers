import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-north-america-servers');
}

export default function GunzodusNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-north-america-servers" />;
}
