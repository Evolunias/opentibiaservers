import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-mexico');
}

export default function EvoluniaCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-mexico" />;
}
