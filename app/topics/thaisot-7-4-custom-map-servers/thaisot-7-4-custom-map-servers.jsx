import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-custom-map-servers');
}

export default function Thaisot74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-custom-map-servers" />;
}
