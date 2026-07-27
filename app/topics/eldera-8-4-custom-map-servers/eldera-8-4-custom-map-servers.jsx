import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-custom-map-servers');
}

export default function Eldera84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-custom-map-servers" />;
}
