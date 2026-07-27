import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-custom-map-servers');
}

export default function Eldera11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-custom-map-servers" />;
}
