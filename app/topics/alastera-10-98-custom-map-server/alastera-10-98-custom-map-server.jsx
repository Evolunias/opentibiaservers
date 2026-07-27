import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-custom-map-server');
}

export default function Alastera1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-custom-map-server" />;
}
