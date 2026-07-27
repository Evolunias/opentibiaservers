import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-custom-map-servers');
}

export default function Thaisot15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-custom-map-servers" />;
}
