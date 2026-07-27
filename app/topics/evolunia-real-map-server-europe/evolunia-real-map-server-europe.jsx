import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-europe');
}

export default function EvoluniaRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-europe" />;
}
