import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-custom-map-server');
}

export default function Oxygenot96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-custom-map-server" />;
}
