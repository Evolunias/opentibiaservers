import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-0-real-map-servers');
}

export default function Thaisot80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-0-real-map-servers" />;
}
