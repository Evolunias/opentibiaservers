import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-real-map-servers');
}

export default function Eldera71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-real-map-servers" />;
}
