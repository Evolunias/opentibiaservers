import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-custom-map-server');
}

export default function Thaisot15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-custom-map-server" />;
}
