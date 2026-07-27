import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-custom-map-servers');
}

export default function Tibiame76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-custom-map-servers" />;
}
