import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-custom-map-server');
}

export default function Alastera15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-custom-map-server" />;
}
