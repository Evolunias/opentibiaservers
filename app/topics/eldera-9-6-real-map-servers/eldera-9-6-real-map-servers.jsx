import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-9-6-real-map-servers');
}

export default function Eldera96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-9-6-real-map-servers" />;
}
