import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-4-custom-map-server');
}

export default function Oxygenot74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-4-custom-map-server" />;
}
