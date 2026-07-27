import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-custom-map-server');
}

export default function Realera12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-custom-map-server" />;
}
