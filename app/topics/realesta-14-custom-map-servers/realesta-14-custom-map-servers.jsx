import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-custom-map-servers');
}

export default function Realesta14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-custom-map-servers" />;
}
