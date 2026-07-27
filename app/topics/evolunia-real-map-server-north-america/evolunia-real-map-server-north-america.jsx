import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-north-america');
}

export default function EvoluniaRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-north-america" />;
}
