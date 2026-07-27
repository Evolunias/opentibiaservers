import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-uk');
}

export default function EvoluniaRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-uk" />;
}
