import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-real-map-servers');
}

export default function Rubinot12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-real-map-servers" />;
}
