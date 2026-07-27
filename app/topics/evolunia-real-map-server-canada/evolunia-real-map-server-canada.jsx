import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-canada');
}

export default function EvoluniaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-canada" />;
}
