import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-custom-map-servers');
}

export default function Eldera96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-custom-map-servers" />;
}
