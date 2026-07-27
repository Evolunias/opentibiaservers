import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-poland');
}

export default function EvoluniaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-poland" />;
}
