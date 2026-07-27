import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-real-map-servers');
}

export default function Realesta12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-real-map-servers" />;
}
