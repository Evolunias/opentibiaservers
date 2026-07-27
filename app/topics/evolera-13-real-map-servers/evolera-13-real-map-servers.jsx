import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-real-map-servers');
}

export default function Evolera13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-real-map-servers" />;
}
