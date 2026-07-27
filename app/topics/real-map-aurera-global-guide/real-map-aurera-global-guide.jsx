import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-guide');
}

export default function RealMapAureraGlobalGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-guide" />;
}
