import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-real-map-servers');
}

export default function Evolera86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-real-map-servers" />;
}
