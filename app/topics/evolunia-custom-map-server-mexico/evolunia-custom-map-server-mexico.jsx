import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-mexico');
}

export default function EvoluniaCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-mexico" />;
}
