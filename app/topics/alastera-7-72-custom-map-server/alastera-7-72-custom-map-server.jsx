import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-custom-map-server');
}

export default function Alastera772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-custom-map-server" />;
}
