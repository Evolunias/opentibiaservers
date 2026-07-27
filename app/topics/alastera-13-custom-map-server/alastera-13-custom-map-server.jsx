import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-custom-map-server');
}

export default function Alastera13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-custom-map-server" />;
}
