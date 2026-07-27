import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-custom-map-server');
}

export default function Alastera81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-custom-map-server" />;
}
