import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-real-map-servers');
}

export default function Evolera100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-real-map-servers" />;
}
