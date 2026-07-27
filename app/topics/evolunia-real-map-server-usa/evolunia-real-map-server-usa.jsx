import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-usa');
}

export default function EvoluniaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-usa" />;
}
