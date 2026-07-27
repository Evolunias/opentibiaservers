import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-custom-map-servers');
}

export default function Realesta15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-custom-map-servers" />;
}
