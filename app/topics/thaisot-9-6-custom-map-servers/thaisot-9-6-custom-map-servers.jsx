import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-custom-map-servers');
}

export default function Thaisot96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-custom-map-servers" />;
}
