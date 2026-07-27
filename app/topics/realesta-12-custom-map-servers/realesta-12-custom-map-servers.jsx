import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-custom-map-servers');
}

export default function Realesta12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-custom-map-servers" />;
}
