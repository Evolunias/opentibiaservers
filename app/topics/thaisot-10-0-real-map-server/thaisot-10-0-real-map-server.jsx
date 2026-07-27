import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-real-map-server');
}

export default function Thaisot100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-real-map-server" />;
}
