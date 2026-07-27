import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-real-map-servers');
}

export default function Eldera11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-real-map-servers" />;
}
