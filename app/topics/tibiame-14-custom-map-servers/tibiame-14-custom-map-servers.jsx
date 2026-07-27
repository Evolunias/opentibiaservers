import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-custom-map-servers');
}

export default function Tibiame14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-custom-map-servers" />;
}
