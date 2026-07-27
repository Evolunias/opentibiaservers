import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-usa');
}

export default function EvoluniaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-usa" />;
}
