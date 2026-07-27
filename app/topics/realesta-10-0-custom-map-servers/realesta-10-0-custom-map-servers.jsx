import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-custom-map-servers');
}

export default function Realesta100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-custom-map-servers" />;
}
