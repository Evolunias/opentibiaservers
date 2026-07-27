import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-latin-america');
}

export default function EvoluniaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-latin-america" />;
}
