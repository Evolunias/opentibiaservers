import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-server-north-america');
}

export default function OlderaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-server-north-america" />;
}
