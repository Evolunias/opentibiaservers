import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-canada');
}

export default function ElderaCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-canada" />;
}
