import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-10-0-real-map-server');
}

export default function Rubinot100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-10-0-real-map-server" />;
}
