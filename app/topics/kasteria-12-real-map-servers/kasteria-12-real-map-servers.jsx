import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-real-map-servers');
}

export default function Kasteria12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-real-map-servers" />;
}
