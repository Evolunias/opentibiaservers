import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-client');
}

export default function RealMapZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-client" />;
}
