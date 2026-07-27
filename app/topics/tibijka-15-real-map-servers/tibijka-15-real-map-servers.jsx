import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-real-map-servers');
}

export default function Tibijka15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-real-map-servers" />;
}
