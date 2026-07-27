import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-real-map-servers');
}

export default function Thaisot11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-real-map-servers" />;
}
