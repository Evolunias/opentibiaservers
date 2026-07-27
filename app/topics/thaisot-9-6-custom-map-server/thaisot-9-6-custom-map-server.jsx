import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-custom-map-server');
}

export default function Thaisot96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-custom-map-server" />;
}
