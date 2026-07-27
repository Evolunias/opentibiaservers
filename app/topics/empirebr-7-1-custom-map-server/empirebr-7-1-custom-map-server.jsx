import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-custom-map-server');
}

export default function Empirebr71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-custom-map-server" />;
}
