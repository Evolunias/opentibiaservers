import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-custom-map-server');
}

export default function Empirebr74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-custom-map-server" />;
}
