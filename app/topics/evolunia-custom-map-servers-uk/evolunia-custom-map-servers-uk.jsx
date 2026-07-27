import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-uk');
}

export default function EvoluniaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-uk" />;
}
