import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-real-map-servers');
}

export default function Kasteria15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-real-map-servers" />;
}
