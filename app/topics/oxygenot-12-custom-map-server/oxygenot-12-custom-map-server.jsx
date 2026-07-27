import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-custom-map-server');
}

export default function Oxygenot12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-custom-map-server" />;
}
