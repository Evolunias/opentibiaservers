import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-11-real-map-servers');
}

export default function Rubinot11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-11-real-map-servers" />;
}
