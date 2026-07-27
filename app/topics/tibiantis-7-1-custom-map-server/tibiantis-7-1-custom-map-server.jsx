import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-custom-map-server');
}

export default function Tibiantis71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-custom-map-server" />;
}
