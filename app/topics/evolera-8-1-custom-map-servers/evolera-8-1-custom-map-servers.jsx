import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-custom-map-servers');
}

export default function Evolera81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-custom-map-servers" />;
}
