import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-real-map-servers');
}

export default function Thaisot13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-real-map-servers" />;
}
