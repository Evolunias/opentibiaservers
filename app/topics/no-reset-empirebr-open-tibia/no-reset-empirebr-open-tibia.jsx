import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-open-tibia');
}

export default function NoResetEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-open-tibia" />;
}
