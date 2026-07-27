import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-custom-map-server');
}

export default function Empirebr100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-custom-map-server" />;
}
