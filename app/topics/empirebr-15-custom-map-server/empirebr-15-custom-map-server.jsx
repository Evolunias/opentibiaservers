import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-custom-map-server');
}

export default function Empirebr15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-custom-map-server" />;
}
