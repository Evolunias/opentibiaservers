import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-custom-map-server');
}

export default function Alastera12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-custom-map-server" />;
}
