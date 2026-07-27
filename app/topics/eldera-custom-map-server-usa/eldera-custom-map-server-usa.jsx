import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-usa');
}

export default function ElderaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-usa" />;
}
