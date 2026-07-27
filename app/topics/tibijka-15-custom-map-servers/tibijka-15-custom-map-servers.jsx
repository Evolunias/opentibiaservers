import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-custom-map-servers');
}

export default function Tibijka15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-custom-map-servers" />;
}
