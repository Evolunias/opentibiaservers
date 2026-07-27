import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-real-map-servers');
}

export default function Kasteria13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-real-map-servers" />;
}
