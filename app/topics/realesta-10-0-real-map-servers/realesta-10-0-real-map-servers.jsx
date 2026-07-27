import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-real-map-servers');
}

export default function Realesta100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-real-map-servers" />;
}
