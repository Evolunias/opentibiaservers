import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-germany');
}

export default function EvoluniaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-germany" />;
}
