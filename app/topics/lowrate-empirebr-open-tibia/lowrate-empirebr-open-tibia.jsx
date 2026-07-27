import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-open-tibia');
}

export default function LowrateEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-open-tibia" />;
}
