import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-real-map-servers');
}

export default function Realesta14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-real-map-servers" />;
}
