import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-open-tibia');
}

export default function HighrateEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-open-tibia" />;
}
