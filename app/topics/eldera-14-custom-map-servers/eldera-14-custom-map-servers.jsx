import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-custom-map-servers');
}

export default function Eldera14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-custom-map-servers" />;
}
