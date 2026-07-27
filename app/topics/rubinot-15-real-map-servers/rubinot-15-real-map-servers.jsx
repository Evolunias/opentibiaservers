import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-real-map-servers');
}

export default function Rubinot15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-real-map-servers" />;
}
