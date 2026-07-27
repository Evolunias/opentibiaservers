import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-custom-map-server');
}

export default function Alastera74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-custom-map-server" />;
}
