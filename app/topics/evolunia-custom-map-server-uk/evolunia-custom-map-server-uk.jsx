import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-uk');
}

export default function EvoluniaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-uk" />;
}
