import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-0-custom-map-server');
}

export default function Thaisot100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-0-custom-map-server" />;
}
