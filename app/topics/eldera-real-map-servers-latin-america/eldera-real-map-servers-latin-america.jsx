import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-real-map-servers-latin-america');
}

export default function ElderaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-real-map-servers-latin-america" />;
}
