import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-custom-map-servers');
}

export default function Tibijka13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-custom-map-servers" />;
}
