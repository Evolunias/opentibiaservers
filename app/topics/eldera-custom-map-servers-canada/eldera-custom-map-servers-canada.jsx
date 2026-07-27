import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-canada');
}

export default function ElderaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-canada" />;
}
