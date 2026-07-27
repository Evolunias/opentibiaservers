import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-0-real-map-servers');
}

export default function Eldera80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-0-real-map-servers" />;
}
