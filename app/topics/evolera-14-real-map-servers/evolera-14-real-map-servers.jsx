import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-real-map-servers');
}

export default function Evolera14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-real-map-servers" />;
}
