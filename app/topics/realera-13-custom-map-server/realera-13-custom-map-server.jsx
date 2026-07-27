import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-custom-map-server');
}

export default function Realera13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-custom-map-server" />;
}
