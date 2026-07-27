import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-latin-america-server');
}

export default function GunzodusLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-latin-america-server" />;
}
