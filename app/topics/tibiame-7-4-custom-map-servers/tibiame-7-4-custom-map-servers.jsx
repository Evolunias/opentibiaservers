import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-custom-map-servers');
}

export default function Tibiame74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-custom-map-servers" />;
}
