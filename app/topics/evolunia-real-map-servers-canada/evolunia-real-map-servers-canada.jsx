import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-canada');
}

export default function EvoluniaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-canada" />;
}
