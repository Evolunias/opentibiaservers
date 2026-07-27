import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-poland');
}

export default function EvoluniaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-poland" />;
}
