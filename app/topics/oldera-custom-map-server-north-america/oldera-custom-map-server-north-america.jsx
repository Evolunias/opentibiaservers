import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-north-america');
}

export default function OlderaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-north-america" />;
}
