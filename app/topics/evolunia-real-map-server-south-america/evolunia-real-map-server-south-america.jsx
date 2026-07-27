import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-south-america');
}

export default function EvoluniaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-south-america" />;
}
