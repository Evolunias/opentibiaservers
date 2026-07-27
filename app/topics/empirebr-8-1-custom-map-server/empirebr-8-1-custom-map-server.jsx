import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-custom-map-server');
}

export default function Empirebr81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-custom-map-server" />;
}
