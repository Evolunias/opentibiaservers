import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-real-map-servers');
}

export default function Tibijka12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-real-map-servers" />;
}
