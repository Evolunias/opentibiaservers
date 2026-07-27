import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-real-map-servers');
}

export default function Thaisot14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-real-map-servers" />;
}
