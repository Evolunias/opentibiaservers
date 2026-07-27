import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-54-custom-map-server');
}

export default function Thaisot854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-54-custom-map-server" />;
}
