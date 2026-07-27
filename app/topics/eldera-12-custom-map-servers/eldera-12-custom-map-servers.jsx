import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-custom-map-servers');
}

export default function Eldera12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-custom-map-servers" />;
}
