import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-ot');
}

export default function RealMapEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-ot" />;
}
