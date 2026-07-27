import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-custom-map-server');
}

export default function Tibiantis12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-custom-map-server" />;
}
