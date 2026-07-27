import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-custom-map-server');
}

export default function Alastera11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-custom-map-server" />;
}
