import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-real-map-servers');
}

export default function Eldera81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-real-map-servers" />;
}
