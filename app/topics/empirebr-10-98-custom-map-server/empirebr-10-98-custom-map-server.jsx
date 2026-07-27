import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-98-custom-map-server');
}

export default function Empirebr1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-98-custom-map-server" />;
}
