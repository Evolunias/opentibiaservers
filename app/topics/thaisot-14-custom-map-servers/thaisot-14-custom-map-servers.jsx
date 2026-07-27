import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-custom-map-servers');
}

export default function Thaisot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-custom-map-servers" />;
}
