import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-custom-map-servers');
}

export default function Thaisot12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-custom-map-servers" />;
}
