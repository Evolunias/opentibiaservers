import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-custom-map-servers');
}

export default function Tibijka96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-custom-map-servers" />;
}
