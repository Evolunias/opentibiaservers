import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-custom-map-servers');
}

export default function Eldera71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-custom-map-servers" />;
}
