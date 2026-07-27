import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-custom-map-servers');
}

export default function Realesta13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-custom-map-servers" />;
}
