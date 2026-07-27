import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-real-map-servers');
}

export default function Thaisot15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-real-map-servers" />;
}
