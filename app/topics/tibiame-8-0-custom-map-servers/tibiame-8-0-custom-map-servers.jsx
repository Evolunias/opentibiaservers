import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-custom-map-servers');
}

export default function Tibiame80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-custom-map-servers" />;
}
