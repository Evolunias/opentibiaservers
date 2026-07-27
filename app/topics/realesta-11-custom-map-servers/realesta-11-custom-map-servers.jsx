import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-custom-map-servers');
}

export default function Realesta11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-custom-map-servers" />;
}
