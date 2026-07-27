import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-usa');
}

export default function ElderaCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-usa" />;
}
