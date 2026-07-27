import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-custom-map-server');
}

export default function Tibiantis14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-custom-map-server" />;
}
