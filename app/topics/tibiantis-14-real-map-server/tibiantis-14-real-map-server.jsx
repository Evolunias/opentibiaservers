import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-real-map-server');
}

export default function Tibiantis14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-real-map-server" />;
}
