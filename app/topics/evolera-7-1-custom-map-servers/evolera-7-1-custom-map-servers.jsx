import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-custom-map-servers');
}

export default function Evolera71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-custom-map-servers" />;
}
