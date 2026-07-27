import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-custom-map-server');
}

export default function Thaisot14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-custom-map-server" />;
}
