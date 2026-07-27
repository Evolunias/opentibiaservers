import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-real-map-server');
}

export default function Rubinot12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-real-map-server" />;
}
