import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-custom-map-server');
}

export default function Empirebr84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-custom-map-server" />;
}
