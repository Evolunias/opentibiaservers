import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-custom-map-servers');
}

export default function Tibijka12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-custom-map-servers" />;
}
