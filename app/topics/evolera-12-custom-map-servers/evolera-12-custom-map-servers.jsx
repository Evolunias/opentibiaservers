import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-custom-map-servers');
}

export default function Evolera12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-custom-map-servers" />;
}
