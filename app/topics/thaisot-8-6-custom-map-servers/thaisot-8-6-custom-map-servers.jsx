import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-6-custom-map-servers');
}

export default function Thaisot86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-6-custom-map-servers" />;
}
