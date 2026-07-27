import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-custom-map-server');
}

export default function Thaisot74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-custom-map-server" />;
}
