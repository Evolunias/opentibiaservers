import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-11-custom-map-server');
}

export default function Realera11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-11-custom-map-server" />;
}
