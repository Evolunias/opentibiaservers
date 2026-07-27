import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-custom-map-server');
}

export default function Thaisot13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-custom-map-server" />;
}
