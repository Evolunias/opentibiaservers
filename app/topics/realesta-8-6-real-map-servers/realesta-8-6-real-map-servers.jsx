import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-real-map-servers');
}

export default function Realesta86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-real-map-servers" />;
}
