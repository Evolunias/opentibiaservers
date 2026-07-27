import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-custom-map-server');
}

export default function Oxygenot13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-custom-map-server" />;
}
