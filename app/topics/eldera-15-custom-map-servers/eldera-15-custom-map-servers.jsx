import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-custom-map-servers');
}

export default function Eldera15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-custom-map-servers" />;
}
