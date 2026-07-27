import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-ot');
}

export default function RealMapZezeniaOnlineOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-ot" />;
}
