import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-real-map-server');
}

export default function Thaisot15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-real-map-server" />;
}
