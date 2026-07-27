import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-custom-map-server');
}

export default function Oxygenot71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-custom-map-server" />;
}
