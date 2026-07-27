import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-custom-map-servers');
}

export default function Evolera15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-custom-map-servers" />;
}
