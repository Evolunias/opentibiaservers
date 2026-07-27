import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-tibia');
}

export default function HighrateEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-tibia" />;
}
