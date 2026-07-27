import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-real-map-servers');
}

export default function Kasteria71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-real-map-servers" />;
}
