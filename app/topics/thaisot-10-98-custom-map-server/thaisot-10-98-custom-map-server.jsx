import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-98-custom-map-server');
}

export default function Thaisot1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-98-custom-map-server" />;
}
