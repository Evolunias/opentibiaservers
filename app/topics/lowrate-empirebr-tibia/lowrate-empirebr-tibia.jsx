import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-tibia');
}

export default function LowrateEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-tibia" />;
}
