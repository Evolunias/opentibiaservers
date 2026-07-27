import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-custom-map-servers');
}

export default function Tibiame15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-custom-map-servers" />;
}
