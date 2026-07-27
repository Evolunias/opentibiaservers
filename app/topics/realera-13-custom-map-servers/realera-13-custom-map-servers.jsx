import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-custom-map-servers');
}

export default function Realera13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-13-custom-map-servers" />;
}
