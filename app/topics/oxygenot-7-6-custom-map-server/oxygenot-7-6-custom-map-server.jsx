import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-custom-map-server');
}

export default function Oxygenot76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-custom-map-server" />;
}
