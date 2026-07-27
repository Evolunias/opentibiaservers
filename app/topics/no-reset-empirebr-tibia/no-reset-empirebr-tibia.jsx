import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-tibia');
}

export default function NoResetEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-tibia" />;
}
