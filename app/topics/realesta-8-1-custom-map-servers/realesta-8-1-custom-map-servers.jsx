import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-custom-map-servers');
}

export default function Realesta81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-custom-map-servers" />;
}
