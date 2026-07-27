import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-custom-map-server');
}

export default function Tibiantis1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-custom-map-server" />;
}
