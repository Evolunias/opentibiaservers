import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-72-custom-map-servers');
}

export default function Realera772CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-7-72-custom-map-servers" />;
}
