import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-1-custom-map-server');
}

export default function Oxygenot81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-1-custom-map-server" />;
}
