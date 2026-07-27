import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-13-custom-map-servers');
}

export default function Tibiame13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-13-custom-map-servers" />;
}
