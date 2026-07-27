import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-canada-servers');
}

export default function GunzodusCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-canada-servers" />;
}
