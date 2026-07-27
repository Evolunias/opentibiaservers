import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-custom-map-server');
}

export default function Empirebr13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-custom-map-server" />;
}
