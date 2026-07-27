import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-custom-map-server');
}

export default function Tibiantis96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-custom-map-server" />;
}
