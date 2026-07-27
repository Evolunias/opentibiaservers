import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-server-sweden');
}

export default function EvoluniaRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-server-sweden" />;
}
