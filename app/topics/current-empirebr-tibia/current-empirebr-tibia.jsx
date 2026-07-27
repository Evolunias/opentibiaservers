import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-tibia');
}

export default function CurrentEmpirebrTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-tibia" />;
}
