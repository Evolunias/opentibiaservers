import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-real-map-servers');
}

export default function Tibijka14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-real-map-servers" />;
}
