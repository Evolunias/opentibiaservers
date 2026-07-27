import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-tibia');
}

export default function RealMapZezeniaOnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-tibia" />;
}
