import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-real-map-servers');
}

export default function Realesta11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-real-map-servers" />;
}
