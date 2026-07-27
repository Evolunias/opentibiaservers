import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-real-map-servers');
}

export default function Tibijka81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-real-map-servers" />;
}
