import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-real-map-servers');
}

export default function Tibijka11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-real-map-servers" />;
}
