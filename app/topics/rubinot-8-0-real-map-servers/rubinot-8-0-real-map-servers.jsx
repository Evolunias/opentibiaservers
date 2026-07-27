import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-0-real-map-servers');
}

export default function Rubinot80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-0-real-map-servers" />;
}
