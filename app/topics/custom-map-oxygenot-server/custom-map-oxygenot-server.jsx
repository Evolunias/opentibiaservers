import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-oxygenot-server');
}

export default function CustomMapOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-oxygenot-server" />;
}
