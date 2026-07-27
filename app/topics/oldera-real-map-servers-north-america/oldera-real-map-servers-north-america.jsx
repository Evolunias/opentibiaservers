import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-real-map-servers-north-america');
}

export default function OlderaRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-real-map-servers-north-america" />;
}
