import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-poland');
}

export default function EvoluniaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-poland" />;
}
