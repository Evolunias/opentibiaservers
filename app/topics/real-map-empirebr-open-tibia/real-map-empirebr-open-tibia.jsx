import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-empirebr-open-tibia');
}

export default function RealMapEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-empirebr-open-tibia" />;
}
