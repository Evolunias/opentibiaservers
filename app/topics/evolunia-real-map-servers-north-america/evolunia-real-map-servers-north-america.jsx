import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-north-america');
}

export default function EvoluniaRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-north-america" />;
}
