import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-real-map-servers');
}

export default function Thaisot12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-real-map-servers" />;
}
