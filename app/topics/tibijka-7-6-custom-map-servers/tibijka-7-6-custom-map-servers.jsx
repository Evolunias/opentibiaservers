import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-custom-map-servers');
}

export default function Tibijka76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-custom-map-servers" />;
}
