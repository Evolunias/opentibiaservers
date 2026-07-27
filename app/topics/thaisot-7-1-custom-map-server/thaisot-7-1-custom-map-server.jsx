import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-1-custom-map-server');
}

export default function Thaisot71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-1-custom-map-server" />;
}
