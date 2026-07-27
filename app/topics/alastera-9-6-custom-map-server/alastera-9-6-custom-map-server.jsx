import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-custom-map-server');
}

export default function Alastera96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-custom-map-server" />;
}
