import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-real-map-servers');
}

export default function Rubinot14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-real-map-servers" />;
}
