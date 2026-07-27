import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-custom-map-servers');
}

export default function Evolera772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-custom-map-servers" />;
}
