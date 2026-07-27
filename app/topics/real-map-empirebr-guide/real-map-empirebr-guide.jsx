import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-guide');
}

export default function RealMapEmpirebrGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-guide" />;
}
