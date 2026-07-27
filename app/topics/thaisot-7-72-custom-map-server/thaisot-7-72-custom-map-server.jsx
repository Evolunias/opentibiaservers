import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-72-custom-map-server');
}

export default function Thaisot772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-72-custom-map-server" />;
}
