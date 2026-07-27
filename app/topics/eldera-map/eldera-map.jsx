import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-map');
}

export default function ElderaMapKeywordPage() {
  return <StaticKeywordPage slug="eldera-map" />;
}
