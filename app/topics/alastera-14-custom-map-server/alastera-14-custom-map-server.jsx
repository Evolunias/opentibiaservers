import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-custom-map-server');
}

export default function Alastera14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-custom-map-server" />;
}
