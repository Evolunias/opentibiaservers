import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-custom-map-servers');
}

export default function Thaisot84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-custom-map-servers" />;
}
