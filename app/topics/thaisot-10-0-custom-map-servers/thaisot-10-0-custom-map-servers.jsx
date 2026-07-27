import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-custom-map-servers');
}

export default function Thaisot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-custom-map-servers" />;
}
