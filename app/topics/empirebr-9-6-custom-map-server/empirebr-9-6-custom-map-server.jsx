import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-custom-map-server');
}

export default function Empirebr96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-custom-map-server" />;
}
