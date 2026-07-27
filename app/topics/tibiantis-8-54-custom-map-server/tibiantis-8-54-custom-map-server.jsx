import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-54-custom-map-server');
}

export default function Tibiantis854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-54-custom-map-server" />;
}
