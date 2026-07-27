import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-custom-map-servers');
}

export default function Tibiame854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-custom-map-servers" />;
}
