import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-custom-map-servers');
}

export default function Realera71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-custom-map-servers" />;
}
