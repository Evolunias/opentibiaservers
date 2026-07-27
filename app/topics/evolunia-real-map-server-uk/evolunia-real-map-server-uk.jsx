import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-uk');
}

export default function EvoluniaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-uk" />;
}
