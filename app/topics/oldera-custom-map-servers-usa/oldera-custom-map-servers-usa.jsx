import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-usa');
}

export default function OlderaCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-usa" />;
}
