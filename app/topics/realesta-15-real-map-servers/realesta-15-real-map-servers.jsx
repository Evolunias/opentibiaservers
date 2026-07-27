import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-real-map-servers');
}

export default function Realesta15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-real-map-servers" />;
}
