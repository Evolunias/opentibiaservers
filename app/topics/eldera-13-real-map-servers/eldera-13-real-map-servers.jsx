import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-real-map-servers');
}

export default function Eldera13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-real-map-servers" />;
}
