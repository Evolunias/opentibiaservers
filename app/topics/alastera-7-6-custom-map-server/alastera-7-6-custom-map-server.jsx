import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-custom-map-server');
}

export default function Alastera76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-custom-map-server" />;
}
