import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-latin-america');
}

export default function EvoluniaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-latin-america" />;
}
