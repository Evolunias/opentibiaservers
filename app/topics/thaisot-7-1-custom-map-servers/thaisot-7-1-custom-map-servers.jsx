import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-1-custom-map-servers');
}

export default function Thaisot71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-1-custom-map-servers" />;
}
