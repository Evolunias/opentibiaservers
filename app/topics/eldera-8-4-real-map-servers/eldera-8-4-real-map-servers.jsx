import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-real-map-servers');
}

export default function Eldera84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-real-map-servers" />;
}
