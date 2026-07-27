import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-54-custom-map-server');
}

export default function Alastera854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-54-custom-map-server" />;
}
