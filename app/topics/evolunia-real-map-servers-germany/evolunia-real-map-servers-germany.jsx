import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-germany');
}

export default function EvoluniaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-germany" />;
}
