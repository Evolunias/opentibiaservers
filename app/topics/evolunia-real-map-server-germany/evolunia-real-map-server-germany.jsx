import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-germany');
}

export default function EvoluniaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-germany" />;
}
