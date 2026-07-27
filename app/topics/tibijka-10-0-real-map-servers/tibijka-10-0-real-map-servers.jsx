import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-real-map-servers');
}

export default function Tibijka100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-real-map-servers" />;
}
