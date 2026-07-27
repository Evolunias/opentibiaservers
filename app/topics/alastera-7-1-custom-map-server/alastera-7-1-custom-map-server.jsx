import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-custom-map-server');
}

export default function Alastera71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-custom-map-server" />;
}
