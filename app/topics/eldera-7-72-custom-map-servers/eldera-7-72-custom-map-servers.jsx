import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-custom-map-servers');
}

export default function Eldera772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-custom-map-servers" />;
}
