import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-real-map-servers');
}

export default function Eldera1098RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-real-map-servers" />;
}
