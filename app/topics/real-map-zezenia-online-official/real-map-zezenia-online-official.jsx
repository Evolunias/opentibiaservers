import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-official');
}

export default function RealMapZezeniaOnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-official" />;
}
