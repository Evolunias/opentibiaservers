import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-72-custom-map-server');
}

export default function Oxygenot772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-72-custom-map-server" />;
}
