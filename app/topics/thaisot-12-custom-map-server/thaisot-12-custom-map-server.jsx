import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-custom-map-server');
}

export default function Thaisot12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-custom-map-server" />;
}
