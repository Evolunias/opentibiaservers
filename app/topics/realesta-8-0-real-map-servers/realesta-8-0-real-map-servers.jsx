import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-0-real-map-servers');
}

export default function Realesta80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-0-real-map-servers" />;
}
