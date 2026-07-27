import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-real-map-servers');
}

export default function Thaisot100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-real-map-servers" />;
}
