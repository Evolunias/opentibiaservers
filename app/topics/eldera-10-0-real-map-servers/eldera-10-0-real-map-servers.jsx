import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-real-map-servers');
}

export default function Eldera100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-real-map-servers" />;
}
