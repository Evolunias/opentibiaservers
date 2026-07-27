import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-europe');
}

export default function EvoluniaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-europe" />;
}
