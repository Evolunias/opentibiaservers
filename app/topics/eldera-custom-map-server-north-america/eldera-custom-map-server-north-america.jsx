import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-north-america');
}

export default function ElderaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-north-america" />;
}
