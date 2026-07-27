import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-custom-map-servers');
}

export default function Eldera74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-custom-map-servers" />;
}
