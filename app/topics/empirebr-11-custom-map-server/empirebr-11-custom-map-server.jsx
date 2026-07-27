import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-custom-map-server');
}

export default function Empirebr11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-custom-map-server" />;
}
