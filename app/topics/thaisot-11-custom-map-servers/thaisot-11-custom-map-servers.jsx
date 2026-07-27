import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-custom-map-servers');
}

export default function Thaisot11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-custom-map-servers" />;
}
