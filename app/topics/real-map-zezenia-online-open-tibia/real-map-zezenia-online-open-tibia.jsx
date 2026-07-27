import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-open-tibia');
}

export default function RealMapZezeniaOnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-open-tibia" />;
}
