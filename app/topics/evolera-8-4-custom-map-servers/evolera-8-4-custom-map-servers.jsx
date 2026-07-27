import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-custom-map-servers');
}

export default function Evolera84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-custom-map-servers" />;
}
