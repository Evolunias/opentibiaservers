import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-72-custom-map-server');
}

export default function Empirebr772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-72-custom-map-server" />;
}
