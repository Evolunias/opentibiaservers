import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-real-map-server');
}

export default function Thaisot84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-real-map-server" />;
}
