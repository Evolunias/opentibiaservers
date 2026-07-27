import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-6-custom-map-servers');
}

export default function Thaisot76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-6-custom-map-servers" />;
}
