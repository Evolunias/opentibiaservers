import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-real-map-servers');
}

export default function Rubinot13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-real-map-servers" />;
}
