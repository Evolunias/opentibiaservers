import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-real-map-servers');
}

export default function Kasteria11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-real-map-servers" />;
}
