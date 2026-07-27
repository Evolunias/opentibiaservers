import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-custom-map-servers');
}

export default function Eldera100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-custom-map-servers" />;
}
