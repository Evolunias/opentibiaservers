import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-custom-map-servers');
}

export default function Thaisot13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-custom-map-servers" />;
}
