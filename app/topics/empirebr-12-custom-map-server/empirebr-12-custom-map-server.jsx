import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-custom-map-server');
}

export default function Empirebr12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-custom-map-server" />;
}
