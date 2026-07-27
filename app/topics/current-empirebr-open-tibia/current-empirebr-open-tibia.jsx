import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-open-tibia');
}

export default function CurrentEmpirebrOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-open-tibia" />;
}
