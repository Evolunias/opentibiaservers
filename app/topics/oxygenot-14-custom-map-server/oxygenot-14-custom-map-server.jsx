import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-custom-map-server');
}

export default function Oxygenot14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-custom-map-server" />;
}
