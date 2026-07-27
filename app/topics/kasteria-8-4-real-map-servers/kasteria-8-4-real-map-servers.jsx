import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-4-real-map-servers');
}

export default function Kasteria84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-4-real-map-servers" />;
}
