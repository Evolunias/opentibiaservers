import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr');
}

export default function RealMapEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr" />;
}
