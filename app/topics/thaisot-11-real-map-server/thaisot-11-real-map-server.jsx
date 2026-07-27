import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-real-map-server');
}

export default function Thaisot11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-real-map-server" />;
}
