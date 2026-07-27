import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-custom-map-server');
}

export default function Empirebr80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-custom-map-server" />;
}
