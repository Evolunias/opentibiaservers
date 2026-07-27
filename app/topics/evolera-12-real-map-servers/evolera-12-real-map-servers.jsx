import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-real-map-servers');
}

export default function Evolera12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-real-map-servers" />;
}
