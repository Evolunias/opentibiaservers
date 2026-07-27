import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-oxygenot-servers');
}

export default function CustomMapOxygenotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-oxygenot-servers" />;
}
