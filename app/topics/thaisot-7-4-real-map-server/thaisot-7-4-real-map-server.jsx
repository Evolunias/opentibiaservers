import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-real-map-server');
}

export default function Thaisot74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-real-map-server" />;
}
