import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-10-98-custom-map-servers');
}

export default function Thaisot1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-10-98-custom-map-servers" />;
}
