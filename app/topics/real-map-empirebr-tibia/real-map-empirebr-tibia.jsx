import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-tibia');
}

export default function RealMapEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-tibia" />;
}
