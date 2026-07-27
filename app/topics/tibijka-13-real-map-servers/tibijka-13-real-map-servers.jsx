import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-real-map-servers');
}

export default function Tibijka13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-real-map-servers" />;
}
