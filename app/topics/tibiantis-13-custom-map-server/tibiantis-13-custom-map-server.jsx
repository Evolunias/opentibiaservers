import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-custom-map-server');
}

export default function Tibiantis13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-custom-map-server" />;
}
