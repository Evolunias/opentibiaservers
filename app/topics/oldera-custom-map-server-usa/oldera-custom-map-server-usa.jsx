import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-server-usa');
}

export default function OlderaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-server-usa" />;
}
