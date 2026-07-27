import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-canada');
}

export default function OlderaCustomMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-canada" />;
}
