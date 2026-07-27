import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot-guide');
}

export default function RealMapNoxiousotGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot-guide" />;
}
