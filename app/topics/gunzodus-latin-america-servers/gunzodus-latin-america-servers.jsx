import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-latin-america-servers');
}

export default function GunzodusLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-latin-america-servers" />;
}
