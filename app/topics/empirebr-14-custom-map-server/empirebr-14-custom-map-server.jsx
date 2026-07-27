import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-custom-map-server');
}

export default function Empirebr14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-custom-map-server" />;
}
