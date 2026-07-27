import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-real-map-servers');
}

export default function Evolera71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-real-map-servers" />;
}
