import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-72-custom-map-servers');
}

export default function Thaisot772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-72-custom-map-servers" />;
}
