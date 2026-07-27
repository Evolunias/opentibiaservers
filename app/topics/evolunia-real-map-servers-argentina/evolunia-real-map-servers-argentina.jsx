import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-argentina');
}

export default function EvoluniaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-argentina" />;
}
