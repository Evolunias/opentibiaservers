import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-custom-map-servers');
}

export default function Realesta76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-custom-map-servers" />;
}
