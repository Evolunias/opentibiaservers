import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-real-map-server');
}

export default function Thaisot13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-real-map-server" />;
}
