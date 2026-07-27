import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-custom-map-server');
}

export default function Thaisot11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-custom-map-server" />;
}
