import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-real-map-servers');
}

export default function Eldera12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-real-map-servers" />;
}
